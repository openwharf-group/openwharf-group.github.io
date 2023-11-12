CONTAINER_TAG=registry.cn-shanghai.aliyuncs.com/serverless-devs/strapi-web:v1
CONTAINER_NAME=strapi-web

buildx:
	docker buildx build --platform linux/amd64 -t ${CONTAINER_TAG} -f Dockerfile .

run:
	docker run -it -p 8080:8080 --name ${CONTAINER_NAME} ${CONTAINER_TAG}

stop:
	docker stop ${CONTAINER_NAME}

push:
	docker push ${CONTAINER_TAG}

clean:
	docker rmi ${CONTAINER_TAG}
