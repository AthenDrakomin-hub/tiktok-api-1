
# TikTok Api：搜索、推荐、视频、用户、标签等等

### TikTok视频Api、TikTok爬虫、TikTok去水印、TikTok视频下载、TikTok视频解析
### TiToData：专业的短视频数据采集、处理平台。
> 更多信息请联系： [TiToData](https://www.titodata.com/about?from=tiktokapi)
> 海量数据采集
> 每天为客户采集5亿条数据
> 覆盖主流平台：TikTok，Zynn，YouTube，抖音，快手，1688，小红书，拼多多，淘宝，美团，饿了么，淘宝，微博

## 项目介绍

本项目提供了一套完整的 TikTok API 接口，可以用于搜索、推荐、获取视频、用户、标签等信息。项目已经配置好可在 Vercel 平台部署，并包含了一个简单的 Node.js 服务器实现。

## 快速开始

1. 克隆项目到本地
2. 安装依赖：`npm install`
3. 启动开发服务器：`npm run dev`
4. 构建生产版本：`npm start`

## 部署到 Vercel

1. 在 Vercel 官网注册账号并登录
2. 连接您的 GitHub 账户
3. 导入此项目仓库
4. Vercel 会自动检测项目并配置部署设置
5. 点击 "Deploy" 开始部署

## 接口列表
## 搜索
- 关键词搜索用户
- 关键词搜索音乐
- 关键词搜索标签

## 推荐
- 相关用户随机推荐
- 相关音乐随机推荐
- 相关标签随机推荐

## 用户
- 用户视频列表
  
## 视频
- 视频详情（通过视频id查询）
- 视频详情（通过链接查询）
- 视频去水印解析
- 流行视频列表

## 标签
- 标签列表
- 标签趋势

## 音乐
- 音乐使用列表
- 音乐趋势
  
# 关键词搜索用户接口示例

### 请求Api
```http
http://主机地址/tiktok/search_for/user?keyword=funny&count=28&token=xxx
```

### 请求方式
```http
GET
```
### 参数
| 字段 | 类型 | 说明 |
| --- | --- | --- |
| token | string | 接口授权码 |
| keyword | string | 搜索关键词 |
| count | int | 返回数量 |

### 返回示例

```json
{
    "data": [
        {
            "stats": {
                "diggCount": 606,
                "followerCount": 1500000,
                "followingCount": 6,
                "heart": 56800000,
                "heartCount": 56800000,
                "videoCount": 640
            },
            "user": {
                "avatarLarger": "https://p16-amd-va.tiktokcdn.com/img/musically-maliva-obj/e94c3a23773483dbc28d2abbc14a127a~c5_1080x1080.jpeg",
                "avatarMedium": "https://p16-amd-va.tiktokcdn.com/img/musically-maliva-obj/e94c3a23773483dbc28d2abbc14a127a~c5_720x720.jpeg",
                "avatarThumb": "https://p16-amd-va.tiktokcdn.com/img/musically-maliva-obj/e94c3a23773483dbc28d2abbc14a127a~c5_100x100.jpeg",
                "id": "6743938120749843462",
                "nickname": "funny",
                "openFavorite": false,
                "privateAccount": false,
                "relation": 0,
                "secUid": "MS4wLjABAAAA7N4AJtt61_ZAflZ_KskEVShnOcDNKpv0jtkOWFSpH0GdhTcnDfH1NaRvyia4E_AJ",
                "secret": false,
                "signature": "🤣Memes\n🔞comedy\n💀jokes\n🏅Goal: 2m followers\n👥follow now to join our community",
                "uniqueId": "funny",
                "verified": false
            }
        }
    ],
    "code": 200,
    "msg": "成功"
}
```

![](https://visitor-badge.laobi.icu/badge?page_id=Video-Hub.tiktok-api)
