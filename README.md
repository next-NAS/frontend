# AutoNAS --前端

## 工具链
vue + elementUI + Echarts + simple-uploader + webpack + ES6 + flex  

## 安装
 - 安装Node.js
首先在[官方网站](https://nodejs.org/en/)上安装node.js  

- clone这个项目
``` bash
git clone https://github.com/next-NAS/frontend.git
```

- 进入文件夹
``` bash
cd frontend
```

- 安装依赖
``` bash
npm install
```

- 开始开发
``` bash
# 默认的前端server端口为8010  
npm run dev
```

- 编译
``` bash
# 只进行开发的话，并不需要编译
npm run build
```

## 并行开发指南
先从`master分支`中创建新的分支
``` bash
git checkout -b your_branch_name
```
这里把`your_branch_name`替换为你希望的分支名。  
然后进行开发和提交。  
完成开发后，`pull request`即可。
