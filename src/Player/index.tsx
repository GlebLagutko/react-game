import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';
import {Audiotrack, Pause, PlayArrow, VolumeMute} from "@material-ui/icons";
import H5AudioPlayer from "react-h5-audio-player";
import ReactAudioPlayer from "react-audio-player";
import AudioPlayer from "material-ui-audio-player";
import {useDispatch, useSelector} from 'react-redux'
import {SET_SOUND_VOLUME} from "../store/actions/SetVolume";
import store from "../store";
import {SET_SOUND_PLAY} from "../store/actions/SetSoundPlay";

const useStyles = makeStyles({
    root: {
        width: 250,
    },
});

const soundValue = state => state.value.soundValue;
const soundPlay = state => state.value.soundPlay;

const mainMusic = new Audio('../../assets/audio/hours.mp3');
mainMusic.loop = true;
mainMusic.volume = 0.5;


export default function Player() {
    const classes = useStyles();
    const [valueSound, setValueSound] = useState(50);
    const [valueMusic, setValueMusic] = useState(50);
    const playSound = useSelector(soundPlay);
    const playMusic = useSelector(soundPlay);
    const dispatch = useDispatch();


    const [turnOnVolumeSound, setVolumeOnSound] = useState(true);
    const [turnOnVolumeMusic, setVolumeOnMusic] = useState(true);
    const [pauseMusic, setPauseMusic] = useState(true);


    const [turnOnMusic, setPause] = useState(false);


    const currentIconSound = turnOnVolumeSound ? <VolumeUp/> : <VolumeMute/>;
    const currentIconMusic = turnOnVolumeMusic ? <VolumeUp/> : <VolumeMute/>;
    const currentIconPause = pauseMusic ? <PlayArrow/> : <Pause/>;

    const handleChangeSound = (event: any, newValue: number) => {
        setValueSound(newValue);
    };

    const handleChangeMusic = (event: any, newValue: number) => {
        setValueMusic(newValue);
        mainMusic.volume = valueMusic / 100;
    };


    if (playSound) {
        console.log(valueSound);
        // @ts-ignore
        let sound = new Audio('../../assets/audio/click.mp3');
        sound.volume = valueSound / 100;
        sound.play();
        dispatch({type: SET_SOUND_PLAY, value: false});
    }

    function iconClickHandlerSound() {
        setVolumeOnSound(!turnOnVolumeSound);
        setValueSound(0);
    }

    function iconClickHandlerMusic() {

        mainMusic.volume = 0;
        setVolumeOnMusic(!turnOnVolumeMusic);
        setValueMusic(0);

    }


    function pauseClickHandler() {
        !pauseMusic ? mainMusic.pause() : mainMusic.play();
        setPauseMusic(!pauseMusic);
    }


    // @ts-ignore
    return (
        <div className={classes.root} style={{margin: "30px 0px", width: "100%"}}>

            {/*<Grid onClick={() => {
                setPause(!turnOnMusic)
            }}>
                {
                    playOnPauseIcon
                }
            </Grid>*/}
            <Grid container spacing={2}> Sound :
                <Grid item xs>{

                    // @ts-ignore
                    <Slider disabled={!turnOnVolumeSound} value={valueSound} onChange={handleChangeSound}
                            aria-labelledby="continuous-slider"/>
                }

                </Grid>
                <Grid onClick={() => {
                    iconClickHandlerSound();
                }}>
                    {
                        currentIconSound
                    }

                </Grid>
            </Grid>


            <Grid container spacing={2}> Music :
                <Grid onClick={() => {
                    pauseClickHandler();
                }}>
                    {
                        currentIconPause
                    }

                </Grid>
                <Grid item xs>{

                    // @ts-ignore
                    <Slider disabled={!turnOnVolumeMusic} value={valueMusic} onChange={handleChangeMusic}
                            aria-labelledby="continuous-slider"/>
                }
                </Grid>
                <Grid onClick={() => {
                    iconClickHandlerMusic()
                }}>
                    {
                        currentIconMusic
                    }

                </Grid>
            </Grid>


        </div>
    );
}