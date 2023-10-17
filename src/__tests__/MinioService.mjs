





class MinioService {
    conn = null;

    constructor() {
        if (!this.conn) {
            this.coon = new S3Client({
                region: 'us-east-1',
                credentials: {
                    accessKeyId: MINIO_ACCESS_KEY,
                    secretAccessKey: MINIO_SECRET_KEY,
                },
                endpoint: MINIO_HOST,
                forcePathStyle: true,
            });
        }
    }

    async saveImage(image {
        try {
            if (!image) {
              throw Boom.badRequest('Image is required');  
            }
        }
    })
}