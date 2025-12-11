const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const PORT = 3000;

// 中间件
app.use(cors());
app.use(express.json());

// TikTok API路由
app.get('/tiktok/search_for/user', async (req, res) => {
  try {
    const { keyword, count } = req.query;
    // 这里应该调用实际的TikTok API
    // 由于我们没有真实的API访问权限，这里返回模拟数据
    const mockData = require('./搜索/关键词搜索用户.json');
    res.json(mockData);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/tiktok/getbyUrl', async (req, res) => {
  try {
    const { url } = req.query;
    // 这里应该调用实际的TikTok API
    // 由于我们没有真实的API访问权限，这里返回模拟数据
    const mockData = require('./视频/视频详情（链接）.json');
    res.json(mockData);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});