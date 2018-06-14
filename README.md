Bit Book is front-end social network app which provides users with possibilities such as:
- creating profiles
- posting customized content (text, video, image)
- uploading comments
- browsing other users posts and comments

Technologies:
- React (CRA, react-dom-router);
- materializeCSS


App decomposition:

<App>
    <Header />
    <LoginRegisterPage />
    <MyProfilePage />
    <PeoplePage />
    <ProfilePage />
    <FeedPage />
    <SinglePostPage />
    <Footer />
</App>

<LoginRegisterPage>
    <AboutLoginRegister />
    <LoginRegisterForm />
</LoginRegisterPage>

<MyProfilePage>
    <ProfileDetails>
        <NumberOfPosts />
        <NumberOfComments />
    </ProfileDetails>
    <UpdateProfileForm />
</MyProfilePage>

<PeoplePage>
    <PeopleList>
        <SearchForm />
        <PeopleItem />
    </PeopleList>
</PeoplePage>

<ProfilePage>
    <ProfileDetails>
        <NumberOfPosts />
        <NumberOfComments />
    </ProfileDetails>
</ProfilePage>

<FeedPage>
    <ListOfPosts>
        <SinglePost>
            <VideoPost />
            <TextPost />
            <ImagePost />
        </SinglePost>
    </ListOfPosts>
    <OptionsSidebar>
        <FilterForm />
        <NewPostButtons />
    </OptionsSidebar>
    <NewPost>
        <NewPostTextForm />
        <NewPostVideoForm />
        <NewPostImageForm />
    </NewPost>
</FeedPage>

<SinglePostPage>
    <PostDetails>
        <PostBody />
        <AddCommentForm />
        <ListOfComments>
            <CommentItem />
        </ListOfComments>
    </PostDetails>
</SinglePostPage>

