# PHP LAMP FOR DOCKER
A simple Docker container to run php + Apache

## PreRequisites

* git
* ssh
* docker

## Installation

### Folder Structure

You should have already a folder structure like this:

    YourDevFolder
    |- EgleesGourmet     <- This repo
    |- orchestration
    |- myStoreAdmin

### Getting Started

You must have Docker installed and running properly.

clone this repo using git

```sh
git clone git@github.com:wayoxmedia/restomarket.git EgleesGourmet
```

cd into your app

```sh
cd EgleesGourmet
```

get a copy of the actual .env file from admins or create your own .env file and edit some values.
```sh
cp .env.sample .env
```

get a copy of the actual config.php file from admins or create your own config.php file and edit some values.
```sh
cp secure/config.sample.php secure/config.php
```

run docker build
```sh
docker compose --env-file .env build
```

this may take some minutes if this is your first install, images are been downloaded.

Now, bring up the environment.

```sh
docker-compose up -d
```

Check the containers are properly running

```sh
docker ps
```

### Troubleshoot

If container can not start, create `logs` folder inside `html` folder.

### Updating your hosts file
MacOS & Linux
In your terminal, run
```sh
sudo nano /etc/hosts
```
PC
```
Open [SystemRoot]\system32\drivers\etc\hosts and edit the file with your text editor with admin privileges.
```
Add the following lines at the end of this hosts file
```
127.0.0.1     eglee.test
```
MacOS & Linux: 'Ctrl+O' then 'y' to save and 'Ctrl+X' to quit nano.
PC: Save and quit your editor.

After these steps, you may need to flush your dns.

Navigate with your browser to the site

`http://eglee.test`

If this URL doesn't work, replace `eglee.test` with localhost or 127.0.0.1

Check it is properly working.

### That's it! Welcome to your docker LAMP Environment.

### Recommendations

* Use Visual Studio Code with the Remote - Containers extension to open your project in a container.
* Use the Docker extension to manage your containers, images, volumes, networks and containers.

Happy coding!

