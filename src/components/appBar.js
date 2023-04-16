import * as React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useParams } from "react-router-dom";
import { movies } from '../data/movies';

export default function BasicCard({item}) {
    const { id } = useParams();
    const findProduct = movies.find((product) => product.id === parseInt(id));
    return (
    <Card sx={{ minWidth: 275 }}>
            <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
    {findProduct.title}
        </Typography>
        <Typography variant="h5" component="div">
            {findProduct.description}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {findProduct.description}
        </Typography>
        <Typography variant="body2">
            {findProduct.trailer}
            <br />
            {'"a benevolent smile"'}
        </Typography>
        </CardContent>
        <CardActions>
        <Link to={`/Products`}>
        <Button size="small">back</Button>
        </Link>
        </CardActions>
    </Card>
    );
}