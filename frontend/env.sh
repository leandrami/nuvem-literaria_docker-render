cat > /usr/share/nginx/html/env-config.js << EOT
window.__ENV__ = { VITE_API_URL: "${VITE_API_URL}" };
EOT