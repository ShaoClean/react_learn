FROM node:16

WORKDIR /usr/my_projects

RUN mkdir ./fe
RUN mkdir ./ws_demo


COPY ./src/* ./fe
COPY ./*.json ./fe
COPY ./index.html ./fe
COPY ./vite.config.ts ./fe
COPY ./public ./fe

RUN cd ./fe && npm i && npm run dev

EXPOSE 5173

COPY ../../../ws_demo/* ./bk

RUN cd ./ws_demo && npm i && npm run dev

EXPOSE 3000