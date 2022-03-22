import { useEffect, useState } from "react";
import axios from "axios";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

export const Feed = () => {

    const url = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.oit.ac.jp%2Fjapanese%2Fnews%2Fcategory.php%3Ftype%3D1%26mode%3Drss"

    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(url)
            .then(resp => { setData(resp.data.items) })
    }, [])

    return (
        <Box sx={{ width: '100%', bgcolor: 'background.paper', mb: 5, border: 1 }}>
            <Divider />
            <nav>
                {data.map(items => (
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton
                                component="a"
                                href={items.link}
                                target="_blank"
                                rel="noopener noreferrer">
                                <ListItemText
                                    primary={items.title}
                                    secondary={items.pubDate} />
                            </ListItemButton>
                        </ListItem>
                    </List>
                ))}
            </nav>
        </Box>
    );
};