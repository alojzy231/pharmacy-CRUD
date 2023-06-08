db_up:
	docker compose -f ./apps/website/docker-compose.yml up db adminer -d
db_stop:
	docker-compose -f ./apps/website/docker-compose.yml stop db adminer
