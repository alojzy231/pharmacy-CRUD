db_up:
	docker compose -f ./apps/backend/docker-compose.yml up db adminer -d
db_stop:
	docker-compose -f ./apps/backend/docker-compose.yml stop db adminer
