import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const MediaCard = (props: any) => {
    const { title, description, image, url } = props;
    return (
        <Card sx={{ maxWidth: 445, margin: "auto", border: 1 }}>
            <CardMedia
                component="img"
                image={image}
                alt="image"
            />
            <CardContent>
                <Typography
                    gutterBottom variant="h5"
                    component="div"
                    margin="auto"
                    textAlign="center">
                    {title}
                </Typography>
                <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ minHeight: 60 }}
                >
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    size="large"
                    variant='contained'
                    sx={{
                        margin: 'auto',
                        px: 5,
                    }}
                    href={url}
                    target="_blank"
                    rel='noopener'>
                    使ってみる
                </Button>
            </CardActions>
        </Card>
    );
}
