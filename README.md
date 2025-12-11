# TikTok Api：搜索、推荐、视频、用户、标签等等

### TikTok视频Api、TikTok爬虫、TikTok去水印、TikTok视频下载、TikTok视频解析
### TiToData：专业的短视频数据采集、处理平台。
> 更多信息请联系： [TiToData](https://www.titodata.com/about?from=tiktokapi)
> 海量数据采集
> 每天为客户采集5亿条数据
> 覆盖主流平台：TikTok，Zynn，YouTube，抖音，快手，1688，小红书，拼多多，淘宝，美团，饿了么，淘宝，微博

## 项目介绍

本项目提供了一套完整的 TikTok API 接口，可以用于搜索、推荐、获取视频、用户、标签等信息。项目已经配置好可在 Vercel 平台部署，并包含了一个简单的 Node.js 服务器实现。

## 如何获取真实的 TikTok API 访问权限

要使用真实的 TikTok API，您需要完成以下步骤：

### 1. 注册 TikTok 开发者账户
访问 [TikTok for Developers](https://developers.tiktok.com/) 并创建开发者账户。

### 2. 创建应用程序
在开发者门户中注册您的应用程序，并申请所需的 API 权限：
- Display API：用于获取用户信息和视频数据
- Login Kit：用于用户授权

### 3. 获取 API 密钥和访问令牌
创建应用后，您将获得：
- Client Key（客户端密钥）
- Client Secret（客户端密钥）
- 访问令牌（Access Token）

### 4. 申请所需权限
您需要申请以下权限范围（scopes）：
- `user.info.basic`：读取用户基本信息
- `video.list`：读取用户公开视频

## 快速开始

1. 克隆项目到本地
2. 安装依赖：`npm install`
3. 在 `server.js` 中替换 `YOUR_ACCESS_TOKEN` 为实际的访问令牌
4. 启动开发服务器：`npm run dev`
5. 构建生产版本：`npm start`

## 部署到 Vercel

1. 在 Vercel 官网注册账号并登录
2. 连接您的 GitHub 账户
3. 导入此项目仓库
4. Vercel 会自动检测项目并配置部署设置
5. 点击 "Deploy" 开始部署

## 接口列表

### 搜索
- 关键词搜索用户
- 关键词搜索音乐
- 关键词搜索标签

### 推荐
- 相关用户随机推荐
- 相关音乐随机推荐
- 相关标签随机推荐

### 用户
- 用户视频列表
- 用户基本信息

### 视频
- 视频详情（通过视频id查询）
- 视频详情（通过链接查询）
- 视频去水印解析
- 流行视频列表

### 标签
- 标签列表
- 标签趋势

### 音乐
- 音乐使用列表
- 音乐趋势

## API 接口说明

### 获取用户信息
```
GET /tiktok/user/info
参数：
- open_id（可选）：用户的 open_id
```

### 获取用户视频列表
```
GET /tiktok/user/videos
参数：
- open_id（可选）：用户的 open_id
- max_count（可选）：返回视频数量，默认20
```

### 搜索用户
```
GET /tiktok/search_for/user
参数：
- keyword：搜索关键词
- count：返回数量
```

### 通过链接获取视频详情
```
GET /tiktok/getbyUrl
参数：
- url：视频链接
```

## 注意事项

1. 当前实现需要有效的 TikTok API 访问令牌才能获取真实数据
2. 模拟数据仅用于演示目的
3. 请遵守 TikTok API 使用条款和限制

## 错误处理

API 调用可能会返回以下错误：
- 401：未授权，访问令牌无效
- 403：禁止访问，权限不足
- 429：请求过多，超出速率限制
- 500：服务器内部错误

![](https://visitor-badge.laobi.icu/badge?page_id=Video-Hub.tiktok-api)