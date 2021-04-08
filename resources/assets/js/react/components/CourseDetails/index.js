import React, { useEffect, useState } from 'react';
import{ useParams } from 'react-router-dom';
import {
  Container,
  Top,
  Middle,
  Left,
  Center,
  Right,
  Sidebar,
  Figure,
  STop,
  SMiddle,
  SBottom,
  Price,
  HR,
  H, H3,
  Category,
  Description,
  Ul, Li,
  Room,
  SMLeft,
  SMRight,
  STH,
  STUL, STLI,
  STHR,
  Bottom,
  BLeft,
  BRight,
  SBC,
  Comments,
  MakeNew,
  MNTop,
  MNBottom,
  MNLeft,
  MNRight,
  TextArea,
  MNText,
  NameInput,
  MNSubBottom,
  SubmitComments,
  CommentsH2,
  Comment,
  UserTop,
  UserComment,
  Commenter,
  HiOutlineUserCircles,
  Videos, Iframe
} from './CourseDetailsElements';
import test2bg from '../../images/test2bg.jpeg';
import ImageGallery from 'react-image-gallery';
import './coursedetails.css';
import api from '../../api';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Carousel, { Dots, slidesToShowPlugin} from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import axios from 'axios';

const images = [
  {
    original: 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

const CourseDetails = () => {
  let { id } = useParams();

  const [course, setCourse] = useState([]);
  const [desc, setDesc] = useState([]);

useEffect(() => {
  api(`api/course/details?id=${id}`)
      .then((data) => {
          console.log(data);
          setCourse(data.course);
          setDesc(data.course.description);
      })
}, []);

  return (
    <Container>

      <Top></Top>

      <Middle>

        <Left>

          <Sidebar>

            <STop>

              <STH>خرید</STH>

              <STUL>

                <STLI>تحویل آنی</STLI>

                <STLI>تحویل از طریق ایمیل</STLI>
                
                <STLI>لینک اختصاصی شما</STLI>

              </STUL>

              <STHR/>

            </STop>

            <SMiddle>

              <SMLeft>{course.price} تومان</SMLeft>

              <SMRight>قیمت دوره</SMRight>

            </SMiddle>

            <SBottom>

              <Price>افزودن به سبد خرید</Price>
              
            </SBottom>

          </Sidebar>

        </Left>

        <Center>

          <H>{course.name}</H>

          <HR/>

          <Category>دوره ها / فن بیان</Category>

          <Description>

            <Room dangerouslySetInnerHTML={{ __html: desc.description }}></Room>

            <H3>کسب های این دوره</H3>

            <Ul>
              
              <Li>جالب میشوید</Li>

              <Li>جالب تر میشوید</Li>

            </Ul>

          </Description>

        </Center>

        <Right>

          <Figure>

            <ImageGallery showNav={false} showPlayButton={false} autoPlay={true} items={images} />

          </Figure>

        </Right>
        
      </Middle>

      <STHR style={{border:"1px solid grey", width:"90%", margin:"50px auto"}} />

        <Videos>

<div style={{width:"80%", background:"#00000050"}}>
        <Carousel
    plugins={[
    'centered',
    'infinite',
    'arrows',
    {
      resolve: slidesToShowPlugin,
      options: {
       numberOfSlides: 2,
      },
    },
  ]}   
>
  <img src="https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
  <img src="https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
  <img src="https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
</Carousel>
</div>
          {/* {harchi.map(({ harchi }) => {
            return (
              <>
              </>
            );
          })} */}

        </Videos>
      
      <STHR style={{border:"1px solid grey", width:"90%", margin:"50px auto"}} />
      
      <Bottom>
        <BLeft>
        
        <SBC>
        <Sidebar>

            <STop>

              <STH>خرید</STH>

              <STUL>

                <STLI>تحویل آنی</STLI>

                <STLI>تحویل از طریق ایمیل</STLI>
                
                <STLI>لینک اختصاصی شما</STLI>

              </STUL>

              <STHR/>

            </STop>

            <SMiddle>

              <SMLeft>{course.price} تومان</SMLeft>

              <SMRight>قیمت دوره</SMRight>

            </SMiddle>

            <SBottom>

              <Price>افزودن به سبد خرید</Price>
              
            </SBottom>

          </Sidebar>
          </SBC>

        </BLeft>
        <div className="course-details-description" dangerouslySetInnerHTML={ {__html: desc.description} }/>
        
        {/* <CKEditor
                    editor={ ClassicEditor }
                    data={description.value}
                    config={ {
                      // Use the German language for this editor.
                      language: 'fa',
                      // ...
                  } }
              
                    onReady={ editor => {
                      editor.isReadOnly="true"
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />

        </BRight> */}
      </Bottom>

      <STHR style={{border:"1px solid grey", width:"90%", margin:"50px auto"}} />

      <CommentsH2>نظر ها</CommentsH2>

      <Comments>

        <MakeNew>

          <MNTop>

            <MNLeft>

              <NameInput type="text" placeholder="نام شما"></NameInput>

            </MNLeft>

            <MNRight>

              <MNText>کامنت نو</MNText>

            </MNRight>

          </MNTop>

          <MNBottom>

            <TextArea placeholder="کامنت شما" >

            </TextArea>

          </MNBottom>

          <MNSubBottom>

            <SubmitComments>ثبت کامنت</SubmitComments>

          </MNSubBottom>

        </MakeNew>

        {/* {comments.map(({ comment }) => {
          return(
        <Comment>
          
          <UserTop>

            <Commenter><HiOutlineUserCircles/>جوزف دو</Commenter>

          </UserTop>

          <UserComment>{comment}</UserComment>
        
        </Comment> );
})} */}

      </Comments>

    </Container>
  )
}

export default CourseDetails;
// dangerouslySetInnerHTML={ {__html: description.value} }