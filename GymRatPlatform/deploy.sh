env=stable
mongoConnString=mongodb://gymrat:gymrat123@ds263048.mlab.com:63048/gymrat?retryWrites=false

docker build --tag gcr.io/gymrat-270418/gymrat:${env} .
docker push gcr.io/gymrat-270418/gymrat:${env}

gcloud beta run deploy gymrat${env} --image gcr.io/gymrat-270418/gymrat:${env} --region us-central1 --platform managed --update-env-vars MONGODB_CONN_STRING=${mongoConnString}