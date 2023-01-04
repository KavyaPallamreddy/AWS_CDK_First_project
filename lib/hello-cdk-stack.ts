import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Queue } from 'aws-cdk-lib/aws-sqs';
import { Bucket } from 'aws-cdk-lib/aws-s3';

export class HelloCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    
    const queue = new Queue(this, 'HelloCdkQueue',{
        visibilityTimeout: cdk.Duration.seconds(300)
    });
      
     const newBucket = new Bucket(this, 'MyFirstBucket',{
         versioned: true,
         removalPolicy: cdk.RemovalPolicy.DESTROY,
         autoDeleteObjects: true
     });
         
  }
}
