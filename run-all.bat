@echo off

echo ==========================================
echo       STARTING HOMEFIX BACKEND
echo ==========================================

start "Config Server" cmd /k "cd /d J:\Homefix-services\user-service\Homefix-backend\config-server && mvn spring-boot:run"

timeout /t 5 /nobreak >nul

start "Service Registry - Eureka" cmd /k "cd /d J:\Homefix-services\user-service\Homefix-backend\service-registery && mvn spring-boot:run"

timeout /t 10 /nobreak >nul

start "Auth Service" cmd /k "cd /d J:\Homefix-services\user-service\Homefix-backend\auth-service && mvn spring-boot:run"

start "User Service" cmd /k "cd /d J:\Homefix-services\user-service\Homefix-backend\user-service && mvn spring-boot:run"

start "Service Service" cmd /k "cd /d J:\Homefix-services\user-service\Homefix-backend\service-service && mvn spring-boot:run"

timeout /t 10 /nobreak >nul

start "API Gateway" cmd /k "cd /d J:\Homefix-services\user-service\Homefix-backend\api-gateway && mvn spring-boot:run"
start "react" cmd /k "cd /d J:\Homefix-services\user-service\Homefix-frontend && npm run dev"

echo.
echo ==========================================
echo       ALL SERVICES ARE STARTING
echo ==========================================
pause