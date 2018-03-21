FROM node:6

RUN node -v

RUN apt-get update
RUN apt-get -y upgrade

RUN apt-get install -y python-dev zip git

RUN curl -O https://bootstrap.pypa.io/get-pip.py; \
python get-pip.py; \
pip install --upgrade awscli