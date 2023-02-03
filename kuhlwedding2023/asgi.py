"""
ASGI config for kuhlwedding2023 project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.1/howto/deployment/asgi/
"""

# import os

# from django.core.asgi import get_asgi_application

# os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'kuhlwedding2023.settings')

# application = get_asgi_application()

import os

from django.core.asgi import get_asgi_application

settings_module = 'kuhlwedding2023.production' if 'WEBSITE_HOSTNAME' in os.environ else 'kuhlwedding2023.settings'
os.environ.setdefault('DJANGO_SETTINGS_MODULE', settings_module)


application = get_asgi_application()