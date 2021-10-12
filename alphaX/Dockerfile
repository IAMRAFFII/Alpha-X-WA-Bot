FROM fusuf/whatsasena:latest

RUN git clone https://github.com/Team-X-E4404/Alpha-X-WA-Bot /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
