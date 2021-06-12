


const useStyle = theme => ({



    root: {
        height: '100%'
    },
    Mat_Menu: {
        height: '100vh',
        flexFlow : 'column',
        [theme.breakpoints.down('xs')]: {

            height: '100%',
            flexFlow : 'row'

        }
    },

    Back_dashboard: {

        height: '90%',
        width: '95%',
        borderRadius : "30px",
        background : [theme.palette.primary.main]

    },
    totalTripcard :{

        height : '30%',
        width : '30%',
        borderRadius : "20px",
        background : [theme.palette.secondary.main]

    }



});

export default useStyle;