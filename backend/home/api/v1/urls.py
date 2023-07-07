from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import CvvrtViewSet,FnvnViewSet,FvdfViewSet

from home.api.v1.viewsets import (
    SignupViewSet,
    LoginViewSet,
)

router = DefaultRouter()
router.register("signup", SignupViewSet, basename="signup")
router.register("login", LoginViewSet, basename="login")
router.register('fnvn', FnvnViewSet )
router.register('cvvrt', CvvrtViewSet )
router.register('fvdf', FvdfViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
