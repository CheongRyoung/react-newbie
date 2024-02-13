# 기본 이미지로 Node.js 사용
FROM node:latest

# 작업 디렉터리 설정
WORKDIR /app

# 리안트 프로젝트를 여기에 복사
COPY . .

# 의존성 설치
RUN npm install

# 포트 노출 (리안트 개발 서버를 위한 것)
EXPOSE 3000

# 시작 명령어 설정 (리안트 개발 서버 실행)
CMD ["npm", "start"]