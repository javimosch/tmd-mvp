docker build . -t lti_nuxt

docker run --name lti_backoffice -p 8080:3000 --link [SERVER NODE CONTAINER] lti_nuxt

