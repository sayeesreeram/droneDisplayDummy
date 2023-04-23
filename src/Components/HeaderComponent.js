import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export default function HeaderComponent(props) {
    const navigate = useNavigate()
    return (
        <Box sx={{ flexGrow: 1,position:"relative" }}>
            <AppBar position="static" sx={{ backgroundColor: "#66D3FA", width: "100vw" }}>
                <Toolbar>
                    <Search >
                        <SearchIconWrapper >
                            <SearchIcon sx={{ color: "#0F5298 !important" }} />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            onChange={(e) => props.handleChange(e.target.value)}
                            inputProps={{ 'aria-label': 'search' }}
                            sx={{ color: "#0F5298 !important" }}
                        />
                    </Search>

                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ left:"45vw", position:"absolute",textAlign: "center",alignItems:"center",justifyContent:"center", flexGrow: 1, color: "#0F5298 !important", font: "30px work sans", fontWeight: "600", display: { xs: 'none', sm: 'block' } }}
                    >
                        Drone Display Cards
                    </Typography>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        onClick={() => { navigate("/");window.location.reload() }}
                        sx={{ position:"absolute",right:"20px", overflow: "visible", cursor: "pointer", textAlign: "center", flexGrow: 1, color: "#0F5298 !important", font: "20px work sans", fontWeight: "600", display: { xs: 'none', sm: 'block' } }}
                    >
                        Logout
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
};