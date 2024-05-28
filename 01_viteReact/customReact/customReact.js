const root = document.querySelector('#root')
const Custom = {
    type:'a',
    props:{
        href:'https://google.com',
        target:'blank'
    },
    children:' Visit google !'
}
// const render = (Custom,root)=>{
//    const element = document.createElement(Custom.type)
//    element.setAttribute('href',Custom.props.href) 
//    element.setAttribute('target',Custom.props.target) 
//    element.innerHTML = Custom.children
//    root.appendChild(element)

// }

// const render = (Custom,root)=>{
//     const element = document.createElement(Custom.type)
//     const propsKeys =  Object.keys(Custom.props)
//     const propsValues = Object.values(Custom.props)
//     for(let i = 0 ;i< propsKeys.length; i++){
//         element.setAttribute(propsKeys[i],propsValues[i])
//     }
//     element.innerHTML = Custom.children
//     root.appendChild(element)
 
//  }

const render = (Custom,root)=>{
    const element = document.createElement(Custom.type)
    const props = Custom.props
    for (const key in props) {
      element.setAttribute(key,props[key])  
    }
    element.innerHTML = Custom.children
    root.appendChild(element)
 
 }

 
render(Custom,root);