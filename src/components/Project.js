import React, {Component} from 'react'

class Project extends Component
{
    render() {
        const {title, image, description, link} = this.props.item;
        return (
            <div style={{
                display: 'inline-block',
                width: '300px',
                margin: '10px'
            }}>
                <h3>{title}</h3>
                <img src={image} alt={title} style={{maxHeight: '200px', maxWidth: '200px', display: 'inline-block', margin: 10}}></img>
                <p>{description}</p>
                <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
            </div>
        )
    }
}

export default Project;