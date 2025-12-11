const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const PORT = 3000;

// 中间件
app.use(cors());
app.use(express.json());

// TikTok API配置
const TIKTOK_API_BASE = 'https://open.tiktokapis.com/v2';
const ACCESS_TOKEN = 'YOUR_ACCESS_TOKEN'; // 需要替换为实际的访问令牌

// TikTok API路由
app.get('/tiktok/search_for/user', async (req, res) => {
  try {
    const { keyword, count } = req.query;
    
    // 实际的TikTok API调用示例（需要有效的访问令牌）
    // 注意：这只是一个示例，实际的用户搜索API可能不同
    const response = await axios.get(`${TIKTOK_API_BASE}/user/info/`, {
      headers: {
        'Authorization': `Bearer ${ACCESS_TOKEN}`
      },
      params: {
        fields: 'open_id,union_id,avatar_url,display_name,bio_description'
      }
    });
    
    res.json(response.data);
  } catch (error) {
    console.error('TikTok API Error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to fetch TikTok user data', details: error.message });
  }
});

app.get('/tiktok/getbyUrl', async (req, res) => {
  try {
    const { url } = req.query;
    
    // 实际的TikTok API调用示例（需要有效的访问令牌）
    // 注意：这只是一个示例，实际的视频详情API可能不同
    const response = await axios.get(`${TIKTOK_API_BASE}/video/query/`, {
      headers: {
        'Authorization': `Bearer ${ACCESS_TOKEN}`
      },
      params: {
        fields: 'id,title,video_description,duration,cover_image_url,embed_link'
      }
    });
    
    res.json(response.data);
  } catch (error) {
    console.error('TikTok API Error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to fetch TikTok video data', details: error.message });
  }
});

// 新增：获取用户视频列表的真实API实现
app.get('/tiktok/user/videos', async (req, res) => {
  try {
    const { open_id, max_count = 20 } = req.query;
    
    // 调用TikTok Video List API
    const response = await axios.post(`${TIKTOK_API_BASE}/video/list/`, {
      max_count: parseInt(max_count)
    }, {
      headers: {
        'Authorization': `Bearer ${ACCESS_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });
    
    res.json(response.data);
  } catch (error) {
    console.error('TikTok API Error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to fetch TikTok user videos', details: error.message });
  }
});

// 新增：获取用户信息的真实API实现
app.get('/tiktok/user/info', async (req, res) => {
  try {
    const { open_id } = req.query;
    
    // 调用TikTok User Info API
    const response = await axios.get(`${TIKTOK_API_BASE}/user/info/`, {
      headers: {
        'Authorization': `Bearer ${ACCESS_TOKEN}`
      },
      params: {
        fields: 'open_id,union_id,avatar_url,display_name,bio_description,follower_count,following_count,likes_count'
      }
    });
    
    res.json(response.data);
  } catch (error) {
    console.error('TikTok API Error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to fetch TikTok user info', details: error.message });
  }
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`To get real TikTok data, you need to replace 'YOUR_ACCESS_TOKEN' with an actual access token.`);
});