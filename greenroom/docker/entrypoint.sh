aws s3 cp s3://greenroom-backstage-config/${COMPANY_NAME}/app-config.yaml /opt/greenroom/app-config.yaml

cd /app && node packages/backend --config /opt/greenroom/app-config.yaml
