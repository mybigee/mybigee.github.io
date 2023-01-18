window.onload = ()=>{

    // 文档标题
    document.title = "个人的学习笔记"
    
    // 小图标
    let link = document.createElement("link")
    link.rel = "shortcut icon"
    link.href = "https://note.ilulj.top/image/%E8%9C%A1%E7%AC%94%E5%B0%8F%E6%96%B0.ico"
    document.head.appendChild(link)

    //底部分割线
    let br = document.createElement("br")
    let line = document.createElement("hr")
    line.style.backgroundColor = "rgba(255,255,255,0.5)"
    line.style.height = "2px"
    
    //版权 
    let right = document.createElement("div")
    right.innerHTML = `Copyright © 2020-${new Date().getFullYear()} sywaj `
    right.style.color = "rgba(255,255,255,0.8)"
    right.style.textAlign = "center"
    right.style.fontSize = "18px"
    right.style.paddingBottom = "4%"

    //追加到typora自己生成的div后
    let typoradiv = document.getElementById("write")
    typoradiv.appendChild(br)
    typoradiv.appendChild(line)
    typoradiv.appendChild(right)
}
