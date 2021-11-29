## 網站名稱： Tulo 圖樂
網站連結：https://secomet.tw

### 目錄：
  * [專案簡介](#專案簡介)
  * [如何執行](#如何執行)
  * [使用技術](#使用技術)
  * [功能結構](#功能結構)
  * [資料夾結構](#資料夾結構)
  * [後端 repository](https://github.com/FelixHuang214/final-project-server)
  

## 專案簡介
 * 提供創作者分享作品的空間，建立一個可以讓觀賞者及創作者互動的空間，希望可以讓創作者有持續創作的動力。
 * 創作者可將繪畫、漫畫或歌曲等作品上傳供其它人觀賞，觀賞者可對喜歡的作品留言及贊助。
## 如何執行
`npm install`

安裝專案所需套件

`npm run start`

在 http://localhost:3000 開啟專案網頁

> 可自行修改 src/images 內的檔案，讓網站的 logo、banner 呈現不同的樣貌

`npm run build`

建立此專案的 production 版本

`npm run deploy`

於 GitHub Page 上部屬專案網站

## 使用技術
 * React Hooks
 * React Router
 * React Sortable Hoc
 * Styled Components
## 功能結構
## 資料夾結構
```
├── public
│   ├──index.html
│   └── robots.txt
├── src
│   ├── components
│   │   ├── AuthorDetail
│   │   │   ├── index.js
│   │   │   └── AuthorDetail.js
│   │   ├── Input
│   │   │   ├── index.js
│   │   │   ├── Icon.js
│   │   │   └── Input.js
│   │   ├── PhotoCrop
│   │   │   ├── index.js
│   │   │   ├── CropBox.js
│   │   │   └── PhotoCrop.js
│   │   ├── PictureEditor
│   │   │   ├── index.js
│   │   │   ├── Upload.js
│   │   │   ├── Picture.js
│   │   │   └── PictureEditor.js
│   │   ├── PictureReader
│   │   │   ├── index.js
│   │   │   └── PictureReader.js
│   │   ├── SideBar
│   │   │   ├── index.js
│   │   │   ├── Icons.js
│   │   │   ├── Header.js
│   │   │   ├── Profile.js
│   │   │   ├── Search.js
│   │   │   ├── SideBar.js
│   │   │   └── SideLink.js
│   │   ├── SignIn
│   │   │   ├── index.js
│   │   │   ├── Icons.js
│   │   │   └── SignIn.js
│   │   ├── SignUp
│   │   │   ├── index.js
│   │   │   ├── Icons.js
│   │   │   └── SignUp.js
│   │   ├── SiteBanner
│   │   │   ├── index.js
│   │   │   └── SiteBanner.js
│   │   ├── SiteHeader
│   │   │   ├── index.js
│   │   │   └── SiteHeader.js
│   │   ├── UserDetail
│   │   │   ├── index.js
│   │   │   └── UserDetail.js
│   │   ├── WorkDetail
│   │   │   ├── index.js
│   │   │   ├── InputWorkDetail.js
│   │   │   ├── ViewWorkDetail.js
│   │   │   └── WorkDetail.js
│   │   ├── WorksBlock
│   │   │   ├── index.js
│   │   │   ├── Work.js
│   │   │   └── WorksBlock.js
│   │   └── App.js
│   ├── constants
│   │   └── globalStyle.js
│   ├── global
│   │   ├── animations.js
│   │   ├── compressImage.js
│   │   ├── contexts.js
│   │   ├── device.js
│   │   ├── setNewFiles.js
│   │   ├── webAPI.js
│   │   └── staticData.js
│   ├── hooks
│   │   ├── useCropBox.js
│   │   ├── useParams.js
│   │   ├── usePictures.js
│   │   ├── useUser.js
│   │   ├── useUserDetail.js
│   │   └── useWorkDetail.js
│   ├── pages
│   │   ├── SettingPage.js(未完成)
│   │   ├── WorkEditPage.js(未完成)
│   │   ├── HomePage.js
│   │   ├── SignInPage.js
│   │   ├── SignUpPage.js
│   │   ├── UserPage.js
│   │   └── WorkPage.js
│   ├── App.test.js
│   └── index.js
├── .gitignore
├── node_modules
├── package.json
├── package-lock.json
└── README.md


```
