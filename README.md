# aws-lambda-typescript-weather-app

Example of using **AWS Lambda** + **Typescript** for Weather APP. You can read [step-by-step post about it](https://amorgunov.com/posts/2020-05-03-using-aws-lambda-with-typescript/).

## Setup

### Register in Weatherstack

- Register in [weatherstack](https://weatherstack.com/)
- Get a API access key [here](https://weatherstack.com/dashboard)

### Register in AWS

- Create AWS account [here](http://aws.amazon.com/)
- Get AWS credentials ([read more](https://serverless.com/framework/docs/providers/aws/guide/credentials/) how get it).
- Export credentials to `~/.bash_profile` or terminal:

```bash
export AWS_ACCESS_KEY_ID=<ACCESS_KEY_ID>
export AWS_SECRET_ACCESS_KEY=<SECRET_ACCESS_KEY>
```

or add these variables to `~/.aws/credentials` (I recommend this way):

```bash
[default]
aws_access_key_id = <ACCESS_KEY_ID>
aws_secret_access_key = <SECRET_ACCESS_KEY>
```

## Usage

- Install dependencies

```bash
npm i
```

- Create `.env` file and add weatherstack api key:

```bash
WEATHERSTACK_API_KEY=<WEATHERSTACK_API_KEY>
```

- Run lambda local:

```bash
npm run local
```

- Deploy lambda to cloud:

```bash
npm run deploy

# You get endpoints, like that
# https://ddc5ofqqm0.execute-api.us-east-2.amazonaws.com/dev/
```

- Run tests

```bash
npm test
```
