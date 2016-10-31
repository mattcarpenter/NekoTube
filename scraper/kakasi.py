#!/usr/bin/python

import pexpect

child = pexpect.spawn('java -Dkakasi.home=./bin -jar bin/lib/kakasi.jar -JH -iUTF-8 -oUTF-8')

class Kakasi:
    def parse_tokens(self, tokens):
        def parse_token(token):
            child.sendline(token)
            child.expect('\n')
            return child.readline().decode('utf-8').strip()
        return [parse_token(token) for token in tokens]