echo "Deploy for (p)roduction or (d)evelopment? "
read answer
env=dev
if [ "$answer" != "${answer#[Pp]}" ] ;then
    env=prod
else
    env=dev
fi

docker build --tag gcr.io/gymrat-270418/gymrat:${env} .
docker push gcr.io/gymrat-270418/gymrat:${env}

gcloud beta run deploy gymrat${env} --image gcr.io/gymrat-270418/gymrat:${env} --region us-central1 --platform managed