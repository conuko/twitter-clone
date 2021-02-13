import React, { Component } from 'react';

/*
here we use a standard React controlled Component with standard React state
and not the Redux State, because we don't need a redux state for this component.
*/
class NewTweet extends Component {
    state = {
        text: '',
    }

    handleChange = (event) => {
        const text = event.target.value;

        this.setState(() => ({
            text
        }))
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const { text } = this.state;

        console.log('New Tweet: ', text);

        // reset the state to an empty text field:
        this.setState(() => ({
            text: ''
        }));
    }

    render() {
        const { text } = this.state;

        const tweetLeft = 280 - text.length;
        return (
            <div>
                <h3 className='center'>Compose a new Tweet</h3>
                <form className='new-tweet' onSubmit={this.handleSubmit}>
                    <textarea
                        placeholder="What's happening?"
                        value={text}
                        onChange={this.handleChange}
                        className='textarea'
                        maxLength={280}
                    />
                    {/* If tweetLeft is getting smaller than 100, show, how many letters are left
                    for your tweet:*/}
                    {tweetLeft <= 100 && (
                        <div className='tweet-length'>
                            {tweetLeft}
                        </div>
                    )}
                    <button
                        className='btn'
                        type='submit'
                        disabled={text === ''}
                    >
                    Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default NewTweet;