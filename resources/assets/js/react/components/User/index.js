import React, { useEffect, useState } from 'react';
import {
    Container,
    MainContainer,
    Display,
    UserNavbar,
    ItemContainer,
    LinkContainer,
    Lp, Span,
    ProfileContainer,
    Profile,
    ProfileImg,
    ProfileTxt,
} from './UserElements';
import Navbar from '../Navbar';
import Footer from '../Footer';
import workinggirl from '../../images/working-girl.png';
import { HashRouter as Router, Route } from 'react-router-dom';
import Details from './details';
import { dash } from '../../Data';
import api from '../../api';
import Orders from './orders';

// these down here are just test
const DisplayOne = () => {
    return(
        <Details {...dash} />
    );
}
const DisplayTwo = () => {
    return(
        <Orders {...dash}/>
    );
}

const User = ({
    dashboardName,
    data
}) => {


    const [user, setUser] = useState();

    useEffect(() => {
        api("api/user/show")
            .then(({ user }) => {
                setUser(user);
            })
    }, []);


    return user ? (
        <Container>
            <Navbar />
            <Router>
            <MainContainer>
                <Display>
                    <Route exact path='/' component={DisplayOne} />
                    <Route path='/testtwo' component={DisplayTwo} />
                </Display>
                <UserNavbar>
                    <ProfileContainer>
                        <Profile>
                            <ProfileImg src={workinggirl} />
                            <ProfileTxt>{user.name}</ProfileTxt>
                        </Profile>
                    </ProfileContainer>
                    <ItemContainer>
                        {data.map(({to, text, icon}, i) => {
                            return(
                                <LinkContainer key={i} to={to}>
                                    <Lp>{text}</Lp><Span>{icon}</Span>
                                </LinkContainer>
                            );
                        })}
                    </ItemContainer>
                </UserNavbar>
            </MainContainer>
            <Footer />
            </Router>
        </Container>
    ) : (
        
        <Container>
            <Navbar />
            <Router>
            <MainContainer>
                <Display>
                    <Route exact path='/' component={DisplayOne} />
                    <Route path='/testtwo' component={DisplayTwo} />
                </Display>
                <UserNavbar>
                    <ProfileContainer>
                        <Profile>
                            <ProfileImg src={workinggirl} />
                            <ProfileTxt>...درحال بارگذاری</ProfileTxt>
                        </Profile>
                    </ProfileContainer>
                    <ItemContainer>
                        {data.map(({to, text, icon}, i) => {
                            return(
                                <LinkContainer key={i} to={to}>
                                    <Lp>{text}</Lp>{icon}
                                </LinkContainer>
                            );
                        })}
                    </ItemContainer>
                </UserNavbar>
            </MainContainer>
            <Footer />
            </Router>
        </Container>
    );
}

export default User;