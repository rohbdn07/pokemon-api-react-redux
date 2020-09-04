import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import GetPokemonList from "../actions/PokemonActions";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
    marginTop: 10,
  },
  media: {
    height: 100,
  },
});

const PokemonList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const pokemonList = useSelector((state) => state.PokemonList);

  useEffect(() => {
    FetchData();
  }, []);

  const FetchData = (page = 1) => {
    dispatch(GetPokemonList(page));
  };

  const ShowData = () => {
    if (!_.isEmpty(pokemonList.data)) {
      return pokemonList.data.map((item) => {
        return (
          <div className='flex'>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image='/static/images/cards/contemplative-reptile.jpg'
                  title='Contemplative Reptile'
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='h2'>
                    {item.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Link to={`/pokemon/${item.name}`} size='small' color='primary'>
                  Learn More
                </Link>
              </CardActions>
            </Card>
          </div>
        );
      });
    }

    if (pokemonList.loading) {
      return <p>loading...</p>;
    }

    if (pokemonList.errMessage !== "") {
      return <p>{pokemonList.errMessage}</p>;
    }
    return <p>Unable to get data</p>;
  };
  return <div>{ShowData()}</div>;
};
export default PokemonList;
