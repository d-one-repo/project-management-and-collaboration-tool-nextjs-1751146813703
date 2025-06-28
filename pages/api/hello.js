// Sample API endpoint
export default function handler(req, res) {
  res.status(200).json({ 
    name: 'Native Union Project Management API',
    version: '1.0.0'
  });
}