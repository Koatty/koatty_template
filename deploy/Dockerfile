FROM node:alpine3.15

MAINTAINER richenlin, https://github.com/richenlin

# Upgrade
RUN echo -e "https://mirror.tuna.tsinghua.edu.cn/alpine/v3.15/main\n\
https://mirror.tuna.tsinghua.edu.cn/alpine/v3.15/community" > /etc/apk/repositories

RUN apk update && apk upgrade

# Time Zone
RUN apk add --no-cache bash curl ca-certificates tzdata && \
    ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && \
    echo "Asia/Shanghai" > /etc/timezone

# If you have native dependencies, you'll need extra tools
# RUN apk add --no-cache make gcc g++ python

# Install module
RUN touch ~/.bashrc && curl -o- -L https://yarnpkg.com/install.sh | bash -s -- --rc && \
yarn --version

RUN npm i -g nrm --registry=https://registry.npm.taobao.org/ && \
	nrm use taobao && npm i -g yarn@1.22.10 pm2@2.10.4
	

# Clean 
RUN rm -rf /var/cache/apk/* \
    && rm -rf /tmp/* 


# Workdir
RUN mkdir -p /data
WORKDIR /data

# Expose port
EXPOSE 3000

# Configure
COPY start.sh /start.sh
COPY pm2.json /pm2.json

CMD ["sh", "/start.sh"]
