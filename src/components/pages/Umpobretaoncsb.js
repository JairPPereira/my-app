import React, { Component } from 'react';
import VideoPlayer from 'react-video-js-player';
import { Link } from 'react-router-dom';
import './videoapp.css';


class Umpobretaoncsb extends Component {
    player = {}
    state = {
        video: {
            src: "https://play.prod.gcp.vix.services/crossing-point_pt/crossing-point_pt_1-1/play_v1_hls_234p.m3u8",

            poster: ""
        }
    }

    onPlayerReady(player) {
        console.log("Player is ready: ", player);
        this.player = player;
    }

    onVideoPlay(duration) {
        console.log("Video played at: ", duration);
    }

    onVideoPause(duration) {
        console.log("Video paused at: ", duration);
    }

    onVideoTimeUpdate(duration) {
        console.log("Time updated: ", duration);
    }

    onVideoSeeking(duration) {
        console.log("Video seeking: ", duration);
    }

    onVideoSeeked(from, to) {
        console.log(`Video seeked from ${from} to ${to}`);
    }

    onVideoEnd() {
        console.log("Video ended");
    }

    render() {
        return (
            <div>
                <p><br /></p>
                <VideoPlayer
                    controls={true}
                    src={this.state.video.src}
                    poster={this.state.video.poster}
                    width="720px"
                    height="auto"
                    onReady={this.onPlayerReady.bind(this)}
                    onPlay={this.onVideoPlay.bind(this)}
                    onPause={this.onVideoPause.bind(this)}
                    onTimeUpdate={this.onVideoTimeUpdate.bind(this)}
                    onSeeking={this.onVideoSeeking.bind(this)}
                    onSeeked={this.onVideoSeeked.bind(this)}
                    onEnd={this.onVideoEnd.bind(this)}
                />
                <p><br /></p>
                <div className="nave">
                    <nav>
                        <p><br /></p>
                        <Link to="/">Home</Link>

                        <p><br /></p>
                        <p>teste vix</p>
                    </nav></div></div>

        );
    }
}
export default Umpobretaoncsb;