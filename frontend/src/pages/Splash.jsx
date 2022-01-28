import { makeStyles } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import shape from "../assets/images/shape.png"
import teacher from "../assets/images/teacher.png"

// const useStyles = makeStyles((theme) => ({}));

// const useStyles = makeStyles((theme) => ({
//     // root: {
//     //     backgroundColor: '#EEEEEE',
//     //     height: '100%'
//     // }
// }));

export default function Splash() {
    // const classes = useStyles();

    return (
        <div>
            <Box
                component="img"
                alt="shape"
                src={shape}
            />
            <Box
                component="img"
                alt="shape"
                src={teacher}
            />
            <p>Menjadi Kompeten Bersama Sertifikasiku</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel in neque adipisci modi minima ipsam dolorem qui ipsa omnis? Possimus odit explicabo vero sunt, deserunt maiores iure cupiditate voluptatibus vitae.</p>
            <Button>Get Started</Button>
        </div>
    )
}