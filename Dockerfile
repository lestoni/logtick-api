#

FROM node:6.9.5

LABEL maintainer Tony Mutai <tony@gebeya.com>
LABEL maintainer Winnie Nyabuti <winnie@gebeya.com>

ADD . /home/logtick

WORKDIR /home/logtick

RUN npm install

EXPOSE 7500

ENTRYPOINT ["node", "app.js"]
