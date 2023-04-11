const fs = require('fs');

function getFilesAndFoldersInDir(path) {
    const items = fs.readdirSync(path);
    const result = [];
    items.forEach(item => {
        const itemPath = `${path}/${item}`;
        const stat = fs.statSync(itemPath);
        if (stat.isDirectory()) {
            let data = {
                // 文件夹
                type: 'folder',
                name: item
            }
            let children = getFilesAndFoldersInDir(itemPath)
            if (children && children.length) {
                data.children = children
            }
            result.push(data);
        } else {
            // 文件
            result.push({
                type: 'file',
                name: item
            });
        }
    });
    return result;
}
const list = getFilesAndFoldersInDir('C:\\Users\\Administrator\\Desktop\\新建文件夹\\新建文件夹\\23 - 个人博客\\my-blog\\docs\\foo\\cssMD')
const fileList = list.map(item=>'/foo/cssMD/'+item.name)
const list1 = getFilesAndFoldersInDir('C:\\Users\\Administrator\\Desktop\\新建文件夹\\新建文件夹\\23 - 个人博客\\my-blog\\docs\\foo\\JavaScriptMD')
const fileList1 = list1.map(item=>'/foo/JavaScriptMD/'+item.name)
const list2 = getFilesAndFoldersInDir('C:\\Users\\Administrator\\Desktop\\新建文件夹\\新建文件夹\\23 - 个人博客\\my-blog\\docs\\foo\\React')
const fileList2 = list2.map(item=>'/foo/React/'+item.name)
const list3 = getFilesAndFoldersInDir('C:\\Users\\Administrator\\Desktop\\新建文件夹\\新建文件夹\\23 - 个人博客\\my-blog\\docs\\foo\\Vue')
const fileList3 = list3.map(item=>'/foo/Vue/'+item.name)
module.exports = {
    themeConfig:{
        logo:'/麦迪.jpg',
        nav: [
            // NavbarItem
            {text:'首页',link:'/'},
            {text: '学习路线',link:'/foo/'},
            {text: '项目实战',link:'/practice/'},
            {text: '零散文章',link:'/articles/'},
            {text: '一起学习',link:'/together/'},
            {text: 'github',link:'https://github.com/PGthirteen'}
        ],
        sidebar: {
            '/foo/': [
                {
                    title:'css学习路线',
                    collapsable:true,
                    children: fileList,
                },
                {
                    title:'JavaScript学习路线',
                    collapsable:true,
                    children:fileList1
                },
                {
                    title:'React学习路线',
                    collapsable:true,
                    children:fileList2
                },
                {
                    title:'Vue学习路线',
                    collapsable:true,
                    children:fileList3
                },
            ],
        }
    }
}
