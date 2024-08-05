import React, { useEffect,useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Input, Select, RTE } from '../index'
import services from '../../lib/config'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
function PostForm({post}) {
    const { register, handleSubmit, watch, setValue, getValues,control } = useForm({
        defaultValues: {
            title: post?.title || '',
            slug: post?.slug || '',
            content: post?.content || '',
            status: post?.status || ''
        }
    })
    const navigate = useNavigate()
    const userData = useSelector(state => state.auth.userData)

    const Submit = async (data) => {
        if (post) {
            const file = data.image[0] ? services.uploadFile(data.image[0]) : null
            if (file) {
                services.deleteFile(post.featuredImage)
            }
            const dbPost = await services.uploadPost(post.$id, {
                ...data,
                featuredImage: file ? file.$id : undefined
            })
            if (dbPost) {
                navigate(`post/${dbPost.$id}`)
            }
        }
        else {
            const file = await services.uploadFile(data.image[0])
            if(file){
                const fileId = file.$id
                data.featuredImage = fileId
                const dbPost = await services.createPost({
                    ...data,
                    userData : userData.$id
                })
                if (dbPost) {
                    navigate(`post/${dbPost.$id}`)
                }
            }

        }

    }
    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
          return value
            .trim()
            .toLowerCase()
            .replace(/^[a-zA-Z\d\s]/ + g, "-")
            .replace(/\s/g, "-");
        return "";
      }, []);
    useEffect(()=>{
    const subscription = watch(()=>{
        if(name==='title'){
            setValue('slug',slugTransform(value.title),{ shouldValidate: true })
        }

    })
    
    return ()=>{
        subscription.unsubscribe()
    }
    },[watch,setValue,slugTransform])
    return (
    <form onSubmit={handleSubmit(Submit)} className="flex flex-wrap">
      <div className="w-2/3 px-2">
        <Input
          label="Title :"
          placeholder="Title"
          className="mb-4"
          {...register("title", { required: true })}
        />
        <Input
          label="Slug :"
          placeholder="Slug"
          className="mb-4"
          {...register("slug", { required: true })}
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), {
              shouldValidate: true,
            });
          }}
        />
        <RTE
          label="Content :"
          name="content"
          control={control}
          defaultValue={getValues("content")}
        />
      </div>
      <div className="w-1/3 px-2">
        <Input
          label="Featured Image :"
          type="file"
          className="mb-4"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("image", { required: !post })}
        />
        {post && (
          <div className="w-full mb-4">
            <img
              src={appwriteService.getFilePreview(post.featuredImage)}
              alt={post.title}
              className="rounded-lg"
            />
          </div>
        )}
        <Select
          options={["active", "inactive"]}
          label="Status"
          className="mb-4"
          {...register("status", { required: true })}
        />
        <Button
          type="submit"
          bgColor={post ? "bg-green-500" : undefined}
          className="w-full"
        >
          {post ? "Update" : "Submit"}
        </Button>
      </div>
    </form>
    )
}

export default PostForm
// there are some confusion here for me !
// I`ll back later to this code base to solve my issues (Insha Allah)