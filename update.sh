#!/bin/bash

docker compose down
git fetch --all
git reset --hard origin/master
docker compose pull
docker compose up -d