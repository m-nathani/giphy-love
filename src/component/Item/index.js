import './item.scss';
import React, { Fragment } from 'react';
import {
  Card, Icon, Image, Placeholder, Rating,
} from 'semantic-ui-react';
import moment from 'moment';

export default class Item extends React.Component {
  constructor(props) {
    super(props);

    this.loadImage = this.loadImage.bind(this);
    this.state = {
      imgloading: true,
    };
  }

  loadImage() {
    this.setState({ imgloading: false });
  }

  render() {
    const { isFavorited, data } = this.props;
    const { imgloading } = this.state;
    return (
      <div>
          <Card>
              {imgloading ? (
                <Placeholder>
                  <Placeholder.Image as='img' onLoad={this.loadImage} src={data.images.fixed_width.url} square />
                </Placeholder>
              ) : (
                <Image key={data.id} src={data.images.fixed_width.url} alt={data.title} />
              )}
            <Card.Content>
              {imgloading ? (
                <Placeholder>
                  <Placeholder.Header>
                    <Placeholder.Line length='very short' />
                    <Placeholder.Line length='medium' />
                  </Placeholder.Header>
                  <Placeholder.Paragraph>
                    <Placeholder.Line length='short' />
                  </Placeholder.Paragraph>
                </Placeholder>
              ) : (
                <Fragment>
                  <Card.Header className="itemHeader">{data.title}</Card.Header>
                  <Card.Meta>
                    <span className='date'>{moment(data.import_datetime).format('MMMM Do YYYY')}</span>
                  </Card.Meta>
                  <Card.Description>
                      <Icon name="registered outline" />Rating: {data.rating}
                  </Card.Description>
                </Fragment>
              )}
            </Card.Content>
            <Card.Content extra>
              <a>Favorite <Rating onClick={ isFavorited ? () => this.props.removeFromFavorites(data)
                : () => this.props.addToFavorites(data) } icon='heart' defaultRating={0} maxRating={5} />
              </a>
            </Card.Content>
          </Card>
      </div>
    );
  }
}
