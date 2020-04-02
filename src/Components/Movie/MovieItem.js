import React from 'react';


class MovieItem extends React.Component {
    render(){
        console.log('props = ', props);
        const { data: {title,  vote_average, image} } = this.props // прикол
        
        return(
            <div>
            <Image src={image} alt={title} title={title}/>
          <p>
            Name: {title}
          </p>
          <p>
        Vote Avarage:  {vote_average}
          </p>
          </div>
        )
    }
}

export default MovieItem;