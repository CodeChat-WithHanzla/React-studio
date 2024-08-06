import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";

export class AuthService {
  account;
  client = new Client();

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async SignUp({ email, password, name }) {
    try {
      const user = await this.account.create(ID.unique(), email, password, name);
      if (user) {
        return this.Login({ email, password });
      } else {
        return user;
      }
    } catch (error) {
      throw new Error(`Failed to create account: ${error.message}`);
    }
  }

  async Login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw new Error(`Login failed: ${error.message}`);
    }
  }
  
  async GetCurrentUser() {
    try {
      const session = await this.account.getSession('current');
      if (session) {
        return await this.account.get();
      } else {
        throw new Error('No active session found');
      }
    } catch (error) {
      if (error.message.includes('missing scope')) {
        throw new Error('User is not authenticated');
      } else {
        throw new Error(`Failed to get current user: ${error.message}`);
      }
    }
  }

  async Logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      throw new Error(`Logout failed: ${error.message}`);
    }
  }

  // async SignInWithGithub() {
  //   try {
  //     await Account.createOAuth2Session('github', 'https://cloud.appwrite.io/v1/account/sessions/oauth2/callback/github/66899a17000a406c6445');
  //   } catch (error) {
  //     console.error('GitHub sign-in failed:', error);
  //   }
  // };
}

const authService = new AuthService();
export default authService;
