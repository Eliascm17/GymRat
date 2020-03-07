FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
COPY GymRatPlatform.csproj ./
RUN dotnet restore "./GymRatPlatform.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "GymRatPlatform.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "GymRatPlatform.csproj" -c Release -o /app/publish

ARG PORT

FROM base AS final
EXPOSE 8080
ENV PORT=8080
ENV ASPNETCORE_URLS=http://*:${PORT}
ENV ASPNETCORE_ENVIRONMENT=production
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "GymRatPlatform.dll"]
