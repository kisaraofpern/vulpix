const local_settings = {
  client: 'mysql',
  connection: {
    user: 'root',
    password: 'newpassword',
    database: 'vulpix'
  }
};

const aws_settings = {
  client: 'mysql',
  connection: {
    host: 'noteflight-vulpix.c7yy4hvo49t8.us-east-1.rds.amazonaws.com',
    user: 'noteflight',
    password: 'noteflight',
    database: 'vuplix'
  }
};

const settings = process.env.RDS_HOSTNAME ? aws_settings : aws_settings;

module.exports = settings;