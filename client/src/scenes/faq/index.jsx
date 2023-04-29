import React from 'react'
import { Box,useTheme,Typography } from '@mui/material'
import Header from '../../components/Header'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { tokens } from '../../theme';

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (
   <Box m="20px">
    <Header title="FAQ" subtitle="Frequently Asked Questions Page"/>
    <Accordion  defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography color={colors.greenAccent[500]} variant="h5">
                An Important Question
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>Velit tempor laborum exercitation anim occaecat magna veniam nulla deserunt velit non. Voluptate nulla nulla cillum nulla enim id laborum duis. Laboris reprehenderit officia cillum laborum exercitation voluptate do tempor qui laboris. Aliqua id magna aliquip quis laboris ex amet officia dolore sint. Elit adipisicing pariatur quis velit. Aute laborum qui elit sunt officia id esse duis irure quis eiusmod duis reprehenderit in. Qui et ea culpa ea esse.</Typography>
        </AccordionDetails>
    </Accordion>
    <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography color={colors.greenAccent[500]} variant="h5">
                Info on Nodejs
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>Irure dolore laboris deserunt nulla ut anim ut irure ea cillum irure. Excepteur et pariatur ad ipsum Lorem cupidatat nisi ut. Do nulla exercitation reprehenderit consectetur. Quis reprehenderit consectetur qui laboris eu nulla minim sit esse est id culpa aliquip in. In voluptate minim cillum duis aute culpa laborum incididunt.</Typography>
        </AccordionDetails>
    </Accordion >
    <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography color={colors.greenAccent[500]} variant="h5">
                Info on MUI(Formeryly Material UI)
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>Voluptate culpa anim reprehenderit Lorem nulla voluptate reprehenderit ex laboris ut aliqua irure duis consectetur. Aliqua excepteur fugiat tempor consequat enim magna laborum elit culpa veniam. Et aliquip eu magna est aute deserunt magna quis irure veniam anim veniam. Quis reprehenderit qui commodo proident commodo laborum cupidatat qui sint magna labore. Velit exercitation deserunt aliqua eu pariatur deserunt qui.</Typography>
        </AccordionDetails>
    </Accordion>
    <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography color={colors.greenAccent[500]} variant="h5">
                Another Important Question
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
Quis adipisicing veniam velit labore enim deserunt do consectetur ad reprehenderit mollit. Ut non exercitation ipsum non. Commodo est duis in qui duis ipsum dolor culpa fugiat labore ut dolor. Exercitation commodo est enim amet ullamco. Ad elit nisi dolor id non aliquip sit in adipisicing consequat ad excepteur non.        </AccordionDetails>
    </Accordion>
    <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography color={colors.greenAccent[500]} variant="h5">
                Annother Important Question
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>Ut incididunt mollit culpa dolor veniam sint ad proident. Ad nisi mollit sint eiusmod. Magna voluptate veniam esse labore anim. Eu do voluptate eiusmod eu enim eiusmod aliqua amet fugiat voluptate quis eu cillum.</Typography>
        </AccordionDetails>
    </Accordion>
    <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography color={colors.greenAccent[500]} variant="h5">
                Bugs and Issues
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>Minim laboris laboris minim proident cillum commodo. Velit sit proident anim dolor reprehenderit amet veniam voluptate. Fugiat deserunt sint officia ullamco dolor tempor Lorem id exercitation commodo sit duis amet.</Typography>
        </AccordionDetails>
    </Accordion>
   </Box>
  )
}

export default FAQ